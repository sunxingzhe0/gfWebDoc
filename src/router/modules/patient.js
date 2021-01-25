/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/components/layout'
import RouterView from '@/components/RouterView'
export default {
  path: '/patient',
  component: Layout,
  redirect: '/patient/blacklist',
  name: 'PatientModules',
  alwaysShow: true,
  meta: {
    title: '用户',
    icon: 'sidebar-patient',
    roles: ['DOC_WEB_PATIENT', 'ZY_ORG_PATIENT', 'ORG_WEB_USER_MENU'],
  },
  children: [
    {
      path: 'mine',
      component: RouterView,
      redirect: '/patient/mine/list',
      meta: { title: '我的患者', roles: ['DOC_WEB_PATIENT_MY_PATIENTS'] },
      children: [
        {
          path: 'list',
          component: () => import('@/views/patient/mine/List.vue'),
          hidden: true,
          meta: {
            title: '列表',
            activeMenu: '/patient/mine',
          },
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/patient/mine/Detail.vue'),
          props: true,
          hidden: true,
          meta: { meta: '患者详情页', activeMenu: '/patient/mine' },
        },
      ],
    },
    {
      path: 'push',
      component: () => import('@/views/patient/Push.vue'),
      meta: { title: '我的推送', roles: ['DOC_WEB_PATIENT_MY_PUSH'] },
    },
    {
      path: 'patient',
      component: () => import('@/views/business/patient/List.vue'),
      meta: {
        title: '患者管理',
        keepAlive: true,
        // roles: ['ORG_WEB_BUSINESS_USER_MANAGEMENT'],
        roles: ['ORG_WEB_USER_MENU_PATIENT_MANAGEMENT'],
      },
    },
    {
      path: 'usermanagement',
      component: () => import('@/views/patient/mine/Institutionalusers.vue'),
      meta: { title: '用户管理', roles: ['ORG_WEB_USER_MENU_USER_MANAGEMENT'] },
    },
    {
      path: 'blacklist',
      name: 'blacklist',
      component: () => import('@/views/zy-page/patient/Blacklist.vue'),
      meta: { title: '黑名单管理', roles: ['ZY_ORG_PATIENT_BLACK'] },
    },
  ],
}