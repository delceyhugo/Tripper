// Base
import Home from '../views/Home'
import NotFound from '../views/404'
// Auth
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import SignupConfirmation from '../views/auth/SignupConfirmation'
import LostPassword from '../views/auth/LostPassword'

export default[
    // Base
    {path: '/home', component: Home, meta: {title: 'Tripper | Home'}},
    {path: '*', component: NotFound, meta: {title: 'Tripper | Lost ?'}},
    // Auth
    {path: '/signin', component: Signin, meta: {title: 'Tripper | Signin'}},
    {path: '/signin/resetpassword', component: LostPassword},
    {path: '/signup', component: Signup, meta: {title: 'Tripper | Signup'}},
    {path: '/signup/confirmation', component: SignupConfirmation},   
]