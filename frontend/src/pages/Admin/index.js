import _DashboardView from './dashboard';
import _CategoryListView, { CategoryDetailView as _CategoryDetailView } from './categories';
import _ItemListView, {
    ItemDetailView as _ItemDetailView,
    ItemAddView as _ItemAddView
} from './items';

export const DashboardView = _DashboardView;
export const CategoryListView = _CategoryListView;
export const CategoryDetailView = _CategoryDetailView;
export const ItemListView = _ItemListView;
export const ItemAddView = _ItemAddView;
export const ItemDetailView = _ItemDetailView;
