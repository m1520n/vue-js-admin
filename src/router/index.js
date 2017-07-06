import Admin from '@/components/Admin.vue'
import LoginView from '@/components/Login.vue'
import NotFoundView from '@/components/404.vue'

// Import Dashboard child components
import DashboardView from '@/components/Dashboard.vue'
import Products from '@/components/Products.vue'
import Blog from '@/components/Blog.vue'
import Pages from '@/components/Pages.vue'
import ProductEditForm from '@/components/ProductEditForm.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: Admin,
    meta: {
      auth: true
    },
    children: [
      {
        path: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: { description: 'Overview of environment' }
      },
      {
        path: 'products',
        component: Products,
        name: 'Products',
        meta: { description: 'List of products' }
      },
      {
        path: 'blog',
        component: Blog,
        name: 'Blog',
        meta: { description: 'List of Blog articles' }
      },
      {
        path: 'pages',
        component: Pages,
        name: 'Pages',
        meta: { description: 'List of pages' }
      },
      {
        path: 'edit-product/:id',
        component: ProductEditForm,
        name: 'Product Edit',
        meta: { description: 'Edit Product' },
        props: true
      }
    ]
  },
  {
    path: '*',
    component: NotFoundView
  }
]

export default routes
