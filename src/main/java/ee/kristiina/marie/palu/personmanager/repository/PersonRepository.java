package ee.kristiina.marie.palu.personmanager.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ee.kristiina.marie.palu.personmanager.person.Person;

import java.util.List;


@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    // @Repository that extends the CrudRepository.--- (CRUD (Create, Read, Update, Delete))
    // The @Repository annotation marks this interface as a Spring Data repository.
    @Query("SELECT p FROM Person p WHERE p.name LIKE %:name% ORDER BY p.name")
    List<Person> searchAndSortByName(@Param("name") String name);

}