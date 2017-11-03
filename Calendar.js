import React, { Component } from 'react';
import './App.css';

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var dayName=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthsInDays=['31','28','31','30','31','30','31','31','30','31','30','31'];
class Renderdays extends Component {
render()
{
	return (<td>
		{this.props.data}
	</td>)
}
}

class App extends Component {
constructor(props)
{
	super();
	this.state={
		date:new Date()
	};
	this.prevMonth=this.prevMonth.bind(this);
	this.nextMonth=this.nextMonth.bind(this);
}
prevMonth()
{
this.setState({
	date:this.resultDate(this.state.date,-1)
})
}
nextMonth(){
	this.setState({
		date:this.resultDate(this.state.date,1)
	})
}
resultDate(currentDate,n)
{
	return new Date(currentDate.setMonth(currentDate.getMonth()  + n))
}
renderDays()
{
	return Object.values(dayName).map((data,index)=>(<Renderdays data={data} key={index}/>))
}
renderFull()
{
var date=this.state.date;
	var i=date.getFullYear();
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	var setDate=new Date();
	var monthsDays;
	if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
			if(months[date.getMonth()]=="Feb"){
				monthsDays=29;
			}
			else{
				monthsDays=monthsInDays[date.getMonth()]
			}
				}
			else{
				monthsDays=monthsInDays[date.getMonth()];
			}

	let rows = [];
	var count=0;
	var getterDate;
	var systemdate=setDate.getDate() + " " + setDate.getMonth() + " " + setDate.getFullYear()
    for (var i = 0; i <6; i++){
      let rowID = `row${i}`
      let cell = [];
      for (var idx = 0; idx <=6; idx++){
		  count++;
		 
		let cellID =`${i}${idx}`
		getterDate=count-firstDay.getDay() + " "  + date.getMonth() + " " + date.getFullYear();
					if(count-firstDay.getDay()>monthsDays || count<=firstDay.getDay() )
						{
					cell.push(<td key={cellID} id={cellID}></td>)
						}
					else if(getterDate==systemdate)
						{
							
					cell.push(<td key={cellID} className="active" id={cellID}>{count-firstDay.getDay()}</td>)
						}
					else{
						cell.push(<td key={cellID} id={cellID}>{count-firstDay.getDay()}</td>)		
						}
        
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return rows;
}
  render() {
     return (
         <div className="main">
            <div className="header">
				<div className="container">
					<button onClick={this.prevMonth}>Prev</button>
						<span className="currentDate">{this.state.date.getDate()} - {months[this.state.date.getMonth()]} - {this.state.date.getFullYear()}</span>
					<button onClick={this.nextMonth}>Next</button>
				</div>
				<div>
					<table>
						<thead>
						<tr>
							{this.renderDays()}
						</tr>
						</thead>
						<tbody>	
							{this.renderFull()}
						</tbody>
					</table>
				</div>
            </div>     
         </div>
      )
  }
}

export default App;