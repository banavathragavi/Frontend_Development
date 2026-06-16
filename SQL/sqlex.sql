show databases;
use 597_db;
show Tables;
#1.User Upcoming Events
#Show a list of all upcoming events a user is registered for in their city, sorted by date.
select e.title,u.full_name,u.city
from users u 
join registrations r on u.user_id=r.user_id 
join events e on e.event_id=r.event_id 
where u.city=e.city order by r.registration_date;
#2.Top Rated Events
#Identify events with the highest average rating, considering only those that have received at least 10 feedback submissions.
select e.title,avg(f.rating) as avg_rating
from events e
join feedback f on e.event_id=f.event_id
group by e.event_id,e.title
having count(*)>=10
order by avg(f.rating) desc;
#3.Inactive Users
#Retrieve users who have not registered for any events in the last 90 days
select u.full_name
from users u
left join registrations r on u.user_id=r.user_id
and r.registration_date >=curdate()-interval 90 day
where r.user_id is null;
#4.Peak Session Hours
#Count how many sessions are scheduled between 10 AM to 12 PM for each event
select count(*) as session
from sessions 
where time(start_time) >='10:00:00' and 
		time(end_time)<='12:00:00';
alter table sessions rename column start_date to start_time;
 select * from sessions;
alter table sessions rename column end_date to end_time;
#5.Most Active Cities
#List the top 5 cities with the highest number of distinct user registrations
select u.city,count(distinct r.user_id) as total_users
from users u
join registrations r on u.user_id=r.user_id
group by u.city
order by total_users desc
limit 5;
#6.Event Resource Summary
#Generate a report showing the number of resources (PDFs, images, links) uploaded for each event.
select e.title,re.resource_type ,count(*) as resource_count
from events e
join resources re on re.event_id=e.event_id
group by e.title,re.resource_type;
#7.Low Feedback Alerts
#List all users who gave feedback with a rating less than 3, along with their comments and associated event names.
select u.full_name,f.comments,e.title
from users u
join feedback f on u.user_id=f.user_id
join events e on f.event_id=e.event_id
where f.rating<=3;
#8. Sessions per Upcoming Event
#Display all upcoming events with the count of sessions scheduled for them.
SELECT e.title,
       COUNT(s.session_id) AS session_count
FROM events e
JOIN sessions s
    ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;
#9. Organizer Event Summary
#For each event organizer, show the number of events created and their current status(upcoming, completed, cancelled).
SELECT u.full_name,
       e.status,
       COUNT(*) AS nof_events
FROM users u
JOIN events e
    ON u.user_id = e.organizer_id
GROUP BY u.full_name, e.status;
delete from events where event_id=4;
select * from events;
#10. Feedback Gap
#Identify events that had registrations but received no feedback at all.
select e.title 
from events e
join registrations r on r.event_id=e.event_id
where e.event_id not in (select event_id from feedback); 
#11. Daily New User Count
#Find the number of users who registered each day in the last 7 days
select registration_date,count(*) as reg_users
from registrations r
where registration_date >= curdate() - interval 7 day
group by r.registration_date;
#12. Event with Maximum Sessions
#List the event(s) with the highest number of sessions.
select e.title , count(*) as session_event
from events e
join sessions s on e.event_id=s.event_id
group by e.event_id,e.title
limit 1;
#13. Average Rating per City
#Calculate the average feedback rating of events conducted in each city.
select e.city,avg(f.rating) as avg_rating
from feedback f
join events e on f.event_id=e.event_id
group by e.city;
#14. Most Registered Events
#List top 3 events based on the total number of user registrations.
select e.title,count(*) as toatal_reg
from events e
join registrations r on r.event_id=e.event_id
group by e.event_id,e.title
order by toatal_reg desc
limit 3;
#15. Event Session Time Conflict
#Identify overlapping sessions within the same event (i.e., session start and end times thatconflict
SELECT s.title,
       s1.title
FROM sessions s
JOIN sessions s1
    ON s.event_id = s1.event_id
   AND s.session_id < s1.session_id
WHERE s.start_time < s1.end_time
  AND s.end_time > s1.start_time;
#16. Unregistered Active Users
#Find users who created an account in the last 30 days but haven’t registered for any events.
SELECT u.full_name
FROM users u
LEFT JOIN registrations r
    ON u.user_id = r.user_id
WHERE u.registration_date >= CURDATE() - INTERVAL 30 DAY
  AND r.user_id IS NULL;
#17Multi-Session Speakers
#Identify speakers who are handling more than one session across all events.
select speaker_name
from sessions 
group by speaker_name
having count(*);
#18. Resource Availability Check
#List all events that do not have any resources uploaded
select e.title 
from events e
left join resources re on re.event_id=e.event_id
where re.event_id is null;