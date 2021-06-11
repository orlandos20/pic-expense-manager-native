import Home from '../screens/Home/Home';
import AddIncome from '../screens/AddIncome/AddIncome';
import AddExpense from '../screens/AddExpense/AddExpense';
import CreateItemModal from '../screens/CreateItemModal/CreateItemModal';

export const MainStackRoutes = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Home',
    },
  },
  {
    name: 'Add Income',
    component: AddIncome,
    options: {
      title: 'Add Income',
    },
  },
  {
    name: 'Add Expense',
    component: AddExpense,
    options: {
      title: 'Add Expense',
    },
  },
];

export const DrawerStackRoutes = [
  {
    name: 'Add Income',
    component: AddIncome,
    options: {
      title: 'Add Income',
      headerShown: true,
    },
  },
  {
    name: 'Add Expense',
    component: AddExpense,
    options: {
      title: 'Add Expense',
      headerShown: true,
    },
  },
];
