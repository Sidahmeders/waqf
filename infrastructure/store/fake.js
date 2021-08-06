const latency = 5

class Store {
  constructor() {
    this.products = []
    this.orders = []
    this.users = [
      {
        id: '86495X74hd',
        displayName: 'جون سينا',
        email: 'cena@gmail.com',
        phoneNumber: '0555443322',
        passwordHash: 'strong-passwordHash',
        role: 'DIRECTOR',
        isVerified: true,
        description: 'نجم ​​وممثل أفلام جريء',
        createdAt: Date.now(),
      },
      {
        id: '86495hdu&84j',
        displayName: 'جون دو',
        email: 'doe@gmail.com',
        phoneNumber: '0555443322',
        passwordHash: 'strong-passwordHash',
        role: 'SEEKING_HELP',
        isVerified: false,
        description: 'يمكن أن يحدث خطأ ما مع هذا المستخدم',
        createdAt: Date.now(),
      },
    ]
  }

  addUser(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.users.push(user)
        resolve(user)
      }, latency)
    })
  }

  getUser({ id, email }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          const user = this.users.find((user) => user.getId() == id)
          resolve(user)
        } else if (email) {
          const user = this.users.find((user) => user.getEmail() == email)
          resolve(user)
        }
      }, latency)
    })
  }

  deleteUser(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.users.findIndex((o) => o.id == userId)
        const user = this.users[index]
        this.users.splice(index, 1)
        resolve(user)
      }, latency)
    })
  }

  listUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users)
      }, latency)
    })
  }

  addProduct(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.products.push(product)
        resolve(product)
      }, latency)
    })
  }

  getProduct(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = this.products.find((p) => p.id == id)
        resolve(product)
      }, latency)
    })
  }

  deleteProduct(productId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.products.findIndex((o) => o.id == productId)
        const product = this.products[index]
        this.products.splice(index, 1)
        resolve(product)
      }, latency)
    })
  }

  listProducts({ ownerId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let products = this.products
        if (ownerId) {
          products = this.products.filter((p) => p.getOwnerId() == ownerId)
        }
        resolve(products)
      }, latency)
    })
  }

  addOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.orders.push(order)
        resolve(order)
      }, latency)
    })
  }

  deleteOrder(orderId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.orders.findIndex((o) => o.id == orderId)
        const order = this.orders[index]
        this.orders.splice(index, 1)
        resolve(order)
      }, latency)
    })
  }

  getOrder(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const order = this.orders.find((o) => o.id == id)
        resolve(order)
      }, latency)
    })
  }

  listOrders({ ownerId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let orders = this.orders
        if (ownerId) {
          orders = this.orders.filter((p) => p.getOwnerId() == ownerId)
        }
        resolve(orders)
      }, latency)
    })
  }
}

module.exports = Store
