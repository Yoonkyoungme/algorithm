SELECT AI.animal_id, AI.animal_type,AI.name
FROM animal_ins AS AI
JOIN animal_outs AS AO ON AI.animal_id = AO.animal_id
WHERE AI.sex_upon_intake LIKE "intact%"
AND (AO.sex_upon_outcome LIKE "spayed%"
OR AO.sex_upon_outcome LIKE "neutered%")