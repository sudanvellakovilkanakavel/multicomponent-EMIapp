var React = require('react');
var ReactDOM = require('react-dom');

 



var PromptContainer = React.createClass({

    render: function () {

      return (
            
       <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center">  

     


calInterestandvalidation: function() {


if( document.myForm.age.value == "" )
         {
            alert( "Please provide your age!" );
            document.myForm.age.focus() ;
            return false;
         }
 if( document.myForm.income.value == "" )
         {
            alert( "Please provide your income!" );
            document.myForm.income.focus() ;
            return false;
         }
  if( document.myForm.loan.value == "" )
         {
            alert( "Please provide your loan!" );
            document.myForm.loan.focus() ;
            return false;
         }

  if( document.myForm.rate.value == "" )
         {
            alert( "Please provide your rate!" );
            document.myForm.rate.focus() ;
            return false;
         }
  if( document.myForm.months.value == "" )
         {
            alert( "Please provide your months!" );
            document.myForm.months.focus() ;
            return false;
         }



  if(


    document.myForm.age.value != "" && 
    document.myForm.income.value != "" && 
    document.myForm.loan.value != "" &&
    document.myForm.rate.value != "" &&
    document.myForm.months.value != ""

    )
         {
//alert("check2");

            var loanterm = document.myForm.months.value;
            var roicomb;  //rate of interest calculated on monthly basis
         
            var emi;
            var principle = document.myForm.loan.value;
            var rannualinterest = document.myForm.rate.value ;




           roicomb = rannualinterest/12/100;

           emi=principle*roicomb *(1+roicomb )^loanterm/((1+roicomb )^loanterm-1);
           alert(emi);
           return true;

          }

return( true );
},



		)



}



});  

        </div>
           
    


module.exports = PromptContainer;

