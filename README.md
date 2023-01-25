DTIU will use api to pull college statistics about specific colleges. 



pt 1.

- data includes true cost of schooling on average

https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=CUNY%20city%20college&api_key=gj8gTZioRMSkwnGkcBPLtvtZyJV0ShIkGT8LD1Rp

github 
https://github.com/RTICWDT/open-data-maker/blob/master/API.md


latest.cost.avg_net_price.consumer.overall_median = Overall median for average net price 

latest.cost.avg_net_price.consumer.median_by_pred_degree = Median average net price amongst institutions with the same predominant degree category

user path - 

after user enters a school, they can click on total programs offered at school. this brings to a new page showing all majors offered at school 

majors, on hover, will show 



()
These are some roles you can get with your degree 

https://www.businessnewsdaily.com/8012-college-majors-career-guide.html


results pt.1 = total debt, degree & average payment. 


pt. 2 

https://www.salary.com/research ? 
https://www.glassdoor.com/developer/index.htm ? api?
find average salary for given degree

(find an api that shows average salary for degree )


obsticles :
FAFSA has to be considered to give acurate extimates
data may be incomplete -

make routes for 2nd page 



user experience - pick colleges, and programs. in user profile it will show shcool & cost properties as well as show future income. 


user picks will be logged in database with crud user buttons. 


blake - add an option for schools to be a featured school show how much it can improve enrollment 

include key loggers 

include trade schools 




model list 
model 1: inital search w/ link on number of majors 
nested model 2: list of majors. each linked to data on program
model 3: 