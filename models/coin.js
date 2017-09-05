'use strict';

module.exports = function(sequelize, DataTypes){
  var Coin = sequelize.define('Coin', {
    id : {
      type : DataTypes.BIGINT,
      primaryKey : true,
      autoIncrement: true
    }
  },{
    paranoid : true,
    underscored : true,
    freezeTableName : true,
    classMethods : {
      associate  : function(models){
        Coin.belongsTo(models.Country);
        Coin.belongsTo(models.Metal);
      }
    },
    instanceMethods : {
      responsify : function(){
        let result = {};
        if(this.Country){
          result.country = this.Country.responsify();
        }
        if(this.Metal){
          result.metal = this.Metal.responsify();
        }
        return result;
      }
    }
  });
  return Coin;
};
