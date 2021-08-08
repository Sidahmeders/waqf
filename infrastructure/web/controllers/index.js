const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')
const passport = require('../middlewares/passport-local-strategy')

const {
  addUser,
  addOrder,
  addProduct,
  listUsers,
  listProducts,
  signInUser,
  listOrders,
  updateUser,
  updateOrder,
} = require('../../../use-cases/index')

const makeGetAdminDashboard = require('./get-admin-dashboard')
const makeGetUserDashboard = require('./get-user-dashboard')
const makeGetSignUp = require('./get-signup')
const makeGetSignout = require('./get-signout')
const makePostSignup = require('./post-signup')
const makePostSignin = require('./post-signin')
const makeGetNewUser = require('./get-new-user')
const makePostNewUser = require('./post-new-user')
const makeGetUsers = require('./get-users')

const makeGetUserSettings = require('./get-user-settings')
const makeGetUserNewOrder = require('./get-user-new-order')
const makePostUserNewOrder = require('./post-user-new-order')
const makeGetAdminOrders = require('./get-admin-orders')
const makeGetUserOrders = require('./get-user-orders')

const makeGetUserNewProduct = require('./get-user-new-product')
const makePostUserNewProduct = require('./post-user-new-product')
const makeGetAdminProducts = require('./get-admin-products')
const makePutUserSettings = require('./put-user-settings')
const makeGetUserProducts = require('./get-user-products')

const makeUpdateUserOrder = require('./update-user-order')

const getUserDashboard = makeGetUserDashboard({ listProducts, listOrders })
const getAdminDashboard = makeGetAdminDashboard({
  listUsers,
  listOrders,
  listProducts,
})

const getSignUp = makeGetSignUp()
const getSignout = makeGetSignout()
const postSignup = makePostSignup({
  addUser,
  flashMessages,
  sanitize,
  validator,
})
const postSignin = makePostSignin({ signInUser, flashMessages, passport })
const getUsers = makeGetUsers({ listUsers })
const getNewUser = makeGetNewUser()
const postNewUser = makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})

const putUserSettings = makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
})
const getAdminOrders = makeGetAdminOrders({ listOrders })
const getUserOrders = makeGetUserOrders({ listOrders })

const getUserSettings = makeGetUserSettings()
const getUserNewOrder = makeGetUserNewOrder()
const postUserNewOrder = makePostUserNewOrder({
  addOrder,
  flashMessages,
  sanitize,
})

const getUserNewProduct = makeGetUserNewProduct()
const postUserNewProduct = makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
})
const getAdminProducts = makeGetAdminProducts({ listProducts })
const getUserProducts = makeGetUserProducts({ listProducts })

const updateUserOrder = makeUpdateUserOrder({
  updateOrder,
  flashMessages,
})

module.exports = {
  getAdminDashboard,
  getUserDashboard,
  getSignUp,
  getSignout,
  postSignup,
  postSignin,
  getNewUser,
  postNewUser,
  getUsers,
  putUserSettings,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getAdminOrders,
  getUserOrders,
  getUserNewProduct,
  postUserNewProduct,
  getAdminProducts,
  getUserProducts,
  updateUserOrder,
}
