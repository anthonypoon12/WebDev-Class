select count(*) from actors
union all
select count(*) from directors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors

select movie_name, release_date from movies;
select first_name, last_name from directors
where
nationality='American';
select * from actors
where
gender = 'M' and
date_of_birth > '1970-01-01';
select movie_name from movies
where
movie_length > 90 and
movie_lang = 'English';

select movie_name, movie_lang from movies where
movie_lang IN ('English', 'Spanish', 'Korean');
select first_name, last_name from actors where
last_name like 'M%' and
date_of_birth between '1940-01-01' and '1969-12-31';
select first_name, last_name from directors where
nationality IN ('British','French','German') and
date_of_birth between '1950-01-01' and '1980-12-31';

select * from directors where
nationality = 'American'
ORDER BY date_of_birth;

select distinct nationality from directors;
SELECT first_name, last_name, date_of_birth FROM actors 
ORDER BY date_of_birth DESC limit 10;