import Home from '../screens/Home/Home';
import AddFromCamera from '../screens/AddFromCamera/AddFromCamera';
import AddFromGallery from '../screens/AddFromGallery/AddFromGallery';
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
    name: 'Add from Camera',
    component: AddFromCamera,
    options: {
      title: 'Add a Expense',
    },
  },
  {
    name: 'Add from Gallery',
    component: AddFromGallery,
    options: {
      title: 'add item',
    },
  },
];

export const DrawerStackRoutes = [
  {
    name: 'Add from Camera',
    component: AddFromCamera,
    options: {
      title: 'Add a Expense',
      headerShown: true,
    },
  },
  {
    name: 'Add from Gallery',
    component: AddFromGallery,
    options: {
      title: 'add item',
      headerShown: true,
    },
  },
];
