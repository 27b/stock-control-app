# stock-control-app

### Python requirements
- django
- djangorestframework
- psycopg2
- python-dotenv

### Frontend requirements
- react 18.1.0
- react-router-dom 6.3.0

## TODO
- Complete the frontend of POS

## Instructions
`virtualenv env`

`pip install -r requirements.txt`

`python manage.py migrate`

`python manage.py runserver`

### Models:
| Category | Type |
| ------------- | ------------- |
| id | integer, auto-increment |
| title | string |


| Item | Type |
| ------------- | ------------- |
| id | integer, auto-increment |
| category_id | foreign-key |
| visibility | bool |
| title | string |
| photo | string |
| unit_price | decimal 2f |
| quantity | integer |
| datetime | string |
| last_update | string |


| Transaction | Type |
| ------------- | ------------- |
| id | integer, auto-increment |
| price | decimal 2f |
| items | psycopg2 array |
| datetime | string |


### Endpoints 

| Endpoints | Description |
| ------------- | ------------- |
| /frontend/ | Send SPA |
| /api/admin-panel/ | Read |
| /api/admin-panel/user/ | Create / Read |
| /api/admin-panel/user/<id> | Read / Update / Delete |
| /api/admin-panel/transaction/ | Read |
| /api/admin-panel/transaction/<id> | Read / Update / Delete |
| /api/admin-panel/item/ | Create / Read |
| /api/admin-panel/item/<id> | Read / Update / Delete |
| /api/point-of-sale/ | Read |
| /api/point-of-sale/transaction/ | Create |
