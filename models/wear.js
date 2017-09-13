'use strict';

module.exports = function(sequelize, DataTypes){
  var Wear = sequelize.define('Wear', {
    id : {
      type : DataTypes.BIGINT,
      primaryKey : true,
      autoIncrement : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      /* TODO : check this Sequelize property in documentation */
      maxLength : 3
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
        return result;
      }
    }
  });
  return Wear;
};
