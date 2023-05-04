

export const Sequelize = jest.fn().mockImplementation(() => ({
    authenticate: jest.fn(),
    define: jest.fn(),
    close: jest.fn(),
    // Add any other methods or classes you need to mock here
    findAll:jest.fn()
  })); 

  