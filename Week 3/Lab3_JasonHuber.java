var topName,topCommission = 0,totalCommission,totalSales,salesName, decSales, janSales, febSales;

salesName = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
decSales = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
janSales = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
febSales = [8000, 7500, 45000, 10000, 38000, 22000, 15000];

console.log("---------------------------");
console.log("Salesperson Commission Avg. Commission");
console.log("---------------------------");

for(var i = 0; i < salesName.length; i++)
{
    totalSales = decSales[i] + janSales[i] + febSales[i];
    if(totalSales > 30000)
        {
        totalCommission = totalSales * 0.08;
        }
    if(totalSales <= 30000 && totalSales > 15000)
        {
        totalCommission = totalSales * 0.05;
        }
    if(totalSales <= 15000 && totalSales > 10000)
        {
        totalCommission = totalSales * 0.03;
        }
    if(totalSales <= 10000 && totalSales > 5000)
        {
        totalCommission = totalSales * 0.02;
        }
    if(totalSales < 5000 && totalSales >= 0)
        {
        totalCommission = totalSales * 0.01;
        }
    if (totalCommission > topCommission)
        {
            topCommission = totalCommission;
            topName = salesName[i];
        }

    console.log(salesName[i] + " $" + totalCommission.toFixed(2) + " $" + (totalCommission/3).toFixed(2));

}

console.log("---------------------------");
console.log("Top salesperson and their commission: " + topName + " $" + topCommission.toFixed(2));
console.log("---------------------------");


