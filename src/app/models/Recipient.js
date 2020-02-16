import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        addressNumber: Sequelize.STRING,
        addressComplement: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zipCode: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipients;
