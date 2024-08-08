import React, { useEffect } from "react";
//import './App.css';
import Chart from 'chart.js';
import axios from 'axios';


function HomePage() {
    var dataSource= {
        labels: [],
        datasets: [
          {
            label: "# of Votes",
            data: [],
            backgroundColor: [
                "#ffcd56", "#ff6384","#36a2eb", "#fd6b19","#fdfd19", "#189c40", "#04350c", "#652e7a"
            ],
            borderColor: ["#ffcd56", "#ff6384","#36a2eb", "#fd6b19","#fdfd19", "#189c40", "#04350c", "#652e7a"],
            borderWidth: 1
          }
        ]
      }
    useEffect(() => {
        
        axios.get('http://localhost:3001/budget')
        .then((res)=>{
            console.log(res.data);
            for(var i=0;i<res.data.myBudget.length;i++) {
                dataSource.datasets[0].data[i]=res.data.myBudget[i].budget;
                dataSource.labels[i]=res.data.myBudget[i].title;
            }


        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "pie",
         data : dataSource
        });
    })
      });
  return (
    <main className="center">
    <div className="_inline-block" >   
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
        <article>
            <h1>
            <p>
                <canvas id="myChart" width="400" height="400"></canvas>
            </p>
            </h1>
        </article>
    </div>

</main>
  );
}

export default HomePage;
