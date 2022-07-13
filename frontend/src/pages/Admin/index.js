import _DashboardView from './dashboard';
import _UserListView, { UserDetailView as _UserDetailView } from './users';
import _CategoryListView, { CategoryDetailView as _CategoryDetailView } from './categories';
import _ItemListView, { ItemDetailView as _ItemDetailView } from './items';
import _TransactionListView, { TransactionDetailView as _TransactionDetailView } from './transactions'

export const DashboardView = _DashboardView;
export const UserListView = _UserListView;
export const UserDetailView = _UserDetailView;
export const CategoryListView = _CategoryListView;
export const CategoryDetailView = _CategoryDetailView;
export const ItemListView = _ItemListView;
export const ItemDetailView = _ItemDetailView;
export const TransactionListView = _TransactionListView;
export const TransactionDetailView = _TransactionDetailView;
