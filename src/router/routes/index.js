import allRoutes from '@/router/routes/all.js'
import publicRoutes from '@/router/routes/public.js'
import dashboard from '@/router/routes/dashboard.js'
import unit from '@/router/routes/unit.js'
import p2h from '@/router/routes/p2h.js'

export default allRoutes.concat(
  publicRoutes,
  dashboard,
  unit,
  p2h,
)