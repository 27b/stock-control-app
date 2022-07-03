import { HTTPHandler, sendAuthRequest } from './http/index';
import { SERVER_URL } from '../constants/urls';

const DASHBOARD_URL = SERVER_URL + 'api/point-of-sale/dashboard/';
const CATEGORY_URL = SERVER_URL + 'api/point-of-sale/category/';
const ITEM_URL = SERVER_URL + 'api/point-of-sale/item/';
const TRANSACTION_URL = SERVER_URL + 'api/point-of-sale/transaction/';

export const DashboardHandler = new HTTPHandler(DASHBOARD_URL, sendAuthRequest);

export const CategoryHandler = new HTTPHandler(CATEGORY_URL, sendAuthRequest);

export const ItemHandler = new HTTPHandler(ITEM_URL, sendAuthRequest);

export const TransactionHandler = new HTTPHandler(TRANSACTION_URL, sendAuthRequest);