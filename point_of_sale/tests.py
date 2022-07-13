from rest_framework.test import APITestCase
from rest_framework import status
from common.models import CustomUser


class LoginViewTest(APITestCase):
    def setUp(self):
        new_user = CustomUser.objects.create(
            username='Tester',
            email='newuser@email.com',
            role='AD'
        )
        new_user.is_active = True
        new_user.set_password('@Testing12345')
        new_user.save()

    def test_user_fields_integrity(self):
        user = CustomUser.objects.filter(username='Tester').first()

        # Check fields of CustomUser Model
        self.assertEqual(user.username, 'Tester')
        self.assertEqual(user.email, 'newuser@email.com')
        self.assertEqual(user.role, 'AD')

        # Check if the password is hashed
        self.assertIsNot(user.password, '@Testing12345')

    def test_user_login_validation(self):
        response = self.client.post(
            '/api/point-of-sale/login/',
            {'username': 'Tester', 'password': '@Testing12345'},
            format='json'
        )

        # Status code 200
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_user_login_credentials(self):
        response = self.client.post(
            '/api/point-of-sale/login/',
            {'username': 'Tester', 'password': '@Testing12345'},
            format='json'
        )
        user_token = response.data.get('token')
        user_data = response.data.get('user')
        
        # Status code 200
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # User credentials
        self.assertEqual(user_data.get('username'), 'Tester')
        self.assertEqual(user_data.get('role'), 'AD')
        self.assertEqual(user_data.get('email'), 'newuser@email.com')
        
        # Token length
        self.assertAlmostEqual(len(user_token), 40)


class UserViewTest(APITestCase):
    def setUp(self):
        # User Admin
        new_user_1 = CustomUser.objects.create(
            username='Tester 1',
            email='newuser1@email.com',
            role='AD'
        )
        new_user_1.set_password('@Testing12345')
        new_user_1.save()

        # User POS
        new_user_2 = CustomUser.objects.create(
            username='Tester 2',
            email='newuser2@email.com',
            role='PS'
        )
        new_user_2.set_password('@Testing12345')
        new_user_2.save()

    def test_user_admin_list_access_is_valid(self):
        self.client.login(username='Tester 1', password='@Testing12345')
        response = self.client.get('/api/point-of-sale/user/')
        data = response.data.get('results')
        self.assertEqual(data[0].get('username'), 'Tester 2')
        self.assertEqual(data[0].get('email'), 'newuser2@email.com')
        self.assertEqual(data[0].get('role'), 'PS')
        self.assertEqual(data[1].get('username'), 'Tester 1')
        self.assertEqual(data[1].get('email'), 'newuser1@email.com')
        self.assertEqual(data[1].get('role'), 'AD')
        self.client.logout()
    
    def test_user_pos_list_access_is_invalid(self):
        self.client.login(username='Tester 2', password='@Testing12345')
        response = self.client.get('/api/point-of-sale/user/')
        self.assertEqual(response.status_code, 403)  # Access denied
        self.client.logout()
    
    def test_user_admin_post_new_user(self):
        self.client.login(username='Tester 1', password='@Testing12345')
        new_user = {
            'username': 'Tester3',
            'email': 'tester3@email.com',
            'role': 'PS',
            'password': '@Testing12345'
        }
        response = self.client.post('/api/point-of-sale/user/', new_user)
        
        # The user is created.
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.client.logout()
    
    def test_user_correctly_saved_in_database(self):
        self.client.login(username='Tester 1', password='@Testing12345')
        new_user = {
            'username': 'Tester3',
            'email': 'tester3@email.com',
            'role': 'PS',
            'password': '@Testing12345'
        }
        response = self.client.post('/api/point-of-sale/user/', new_user)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        user_in_db = CustomUser.objects.filter(username='Tester3').first()

        # Check user in db credentials
        self.assertEqual(user_in_db.username, 'Tester3')
        self.assertEqual(user_in_db.role, 'PS')
        self.assertEqual(user_in_db.email, 'tester3@email.com')
        
        # Check user in db password hashed
        self.assertAlmostEqual(len(user_in_db.password), 88)
        self.client.logout()
