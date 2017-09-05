'use strict';

module.exports = function(sequelize, DataTypes){
  var Country = sequelize.define('Country',{
    id : {
      type : DataTypes.BIGINT,
      primaryKey : true,
      autoIncrement : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    iso : {
      type : DataTypes.STRING,
      allowNull : false
    }
  },{
    paranoid : true,
    underscored : true,
    freezeTableName : true,
    classMethods : {
      associate : function(models){

      }
    },
    instanceMethods : {
      responsify : function(){
        let result = {};
        result.id = this.id;
        result.name = this.name;
        result.iso = this.iso;
        return result;
      }
    }
  });
  return Country;
};
