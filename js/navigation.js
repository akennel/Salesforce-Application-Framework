//If the user wants to create another Event, switch them back to
//the create interface
function ShowAddResourcePage(){
    $("#SavingPage").fadeOut("fast");
    $("#ShowAddResourcePageButton").fadeOut("fast");
    $("#AccountOverview").fadeOut("fast");
    $("#SavingStatusList").empty();
    $("#AddResourcePage").fadeIn("slow");
    $("#AccContChngPage").fadeOut("fast");
    if ($("#ROWStartDate").val() == ""){
        SetDate();
        GetResourceRates();
    }
}
function ShowAccountOverviewPage(){
    $("#SavingPage").fadeOut("fast");
    $("#ShowAddResourcePageButton").fadeOut("fast");
    $("#AccountOverview").fadeIn("fast");
    $("#SavingStatusList").empty();
    $("#AddResourcePage").fadeOut("slow");
    $("#AccContChngPage").fadeOut("fast");
}

function ShowAccContChngPage(){
    $("#SavingPage").fadeOut("fast");
    $("#ShowAddResourcePageButton").fadeOut("fast");
    $("#AccountOverview").fadeOut("fast");
    $("#SavingStatusList").empty();
    $("#AddResourcePage").fadeOut("slow");
    $("#AccContChngPage").fadeIn("fast");

}