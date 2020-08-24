Code Challenge

	- Imagine you are one of our consultants and you got assigned to a project at one of our top partners.

## Scenario:
	
	- They have a number of connected vehicles that belongs to a number of customers.
	- They have a need to be able to view the status of the connection among these vehicles on a monitoring display.
	- The vehicles send the status of the connection one time per minute.
	- The status can be compared with a ping (network trace); no request from the vehicle means no connection. 
	- So, vehicle is either Connected or Disconnected.

## Task:

	- Your task will be to create a data store that keeps these vehicles with their status and the customers who own them, as well as a GUI (preferably web-based) that displays the status.
	- Obviously, for this task, there are no real vehicles available that can respond to your "ping" request.
	- This can either be solved by using static values or ​​by creating a separate machinery that returns random fake status.

## Requirements

	1. Web GUI (Single Page Application Framework/Platform).
		 - An overview of all vehicles should be visible on one page (full-screen display), together with their status.
		 - It should be able to filter, to only show vehicles for a specific customer.
		 - It should be able to filter, to only show vehicles that have a specific status.
	2. Random simulation to vehicles status sending.
	3. If database design will consume a lot of time, use data in-memory representation.
	4. Unit Testing.
	5. .NET Core, Java or any language you feel comfortable with.
	6. Complete analysis for the problem.
		 - Full architectural sketch to solution.
		 - Analysis behind the solution design, technologies....
		 - How to run your solution.
	7. Use CI (Travis, Circle, TeamCity...) to verify your code (Static analysis,..) and tests.
	8. Dockerize the whole solution.
	9. Use Microservices architecture.
		- Use any Microservices Chassis Framework.
	10. Use any free tier on any cloud platform like: - AWS, Azure or GCP

## Optional Requirements

	1. Write an integration test.
	2. Write an automation test.
	3. Explain if it is possible to be in Serverless architecture and how?
	4. Continuous delivery to the solution to the cloud.

##  Data:
Below you have all customers from the system; their addresses and the vehicles they own.

|-----------------------------------|
| Kalles Grustransporter AB         |
| Cementvägen 8, 111 11 Södertälje  |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| YS2R4X20005399401     ABC123      |
| VLUR4X20009093588     DEF456      |
| VLUR4X20009048066     GHI789      |
|-----------------------------------|

|-----------------------------------|
| Johans Bulk AB                    |
| Balkvägen 12, 222 22 Stockholm    |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| YS2R4X20005388011     JKL012      |
| YS2R4X20005387949     MNO345      |
------------------------------------|

|-----------------------------------|
| Haralds Värdetransporter AB       |
| Budgetvägen 1, 333 33 Uppsala     |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| VLUR4X20009048066     PQR678      |
| YS2R4X20005387055     STU901      |
|-----------------------------------|

### Complete analysis for the problem:

- Problem: Which cars have been active in the last minute?
- Analysis:
    - Status from the vehicles every minute is obtained through an automated system that reports every minute the 
    status of each individual vehicle. The vehicles send "fake" status every minute using the useInterval function 
    which for each minute randomly, 50/50, gives each vehicle a time. To know if the vehicle's status is on / off, 
    check if the given “timeStamp” for each individual vehicle is older than one minute. If it is less than 1 minute, 
    it means that the status of the vehicle is on, which leads to the rest being off. Database implementation would 
    be too time consuming as you would then have had to arrange a server the intervals would run on. This was handled 
    by localstorage where you cache the data and update that data every minute. From localstorage, the state of the 
    system is continuously updated, which results in updated data every minute throughout the app.

    - The system is self-propelled and reports the status of each vehicle. Filters are available to filter out 
    vehicle status and which customer you want to see. If you want to start the system, you install it and start 
    the application.
