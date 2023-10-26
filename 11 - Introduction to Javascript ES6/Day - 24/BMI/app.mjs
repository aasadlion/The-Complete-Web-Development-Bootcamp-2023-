function BMICal(weight,height) {
    
var BMI=weight/(Math.pow(height,2))
return Math.round(BMI)
}
console.log(BMICal(65,1.8))