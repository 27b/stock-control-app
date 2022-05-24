# stock-control-app
## Instructions
`virtualenv env`

`pip install -r requirements.txt`

`python manage.py migrate`

`python manage.py runserver`

### Libraries
- Django
- Django Rest Framework
- Psycopg2
- Python-Dotenv

### Models:
#### Category
- id 
- title

#### Item
- id
- category_id
- visibility
- title
- photo
- unit_price
- quantity
- datetime
- last_update

#### Transaction
- price
- items
- datetime


### Endpoints 
/api/admin-panel/user/
/api/admin-panel/user/<id>
 
/api/admin-panel/transaction/
/api/admin-panel/transaction/<id>

/api/admin-panel/
/api/admin-panel/item/
/api/admin-panel/item/<id>

/api/point-of-sale/
/api/point-of-sale/transaction/

/api/frontend/
 