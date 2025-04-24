package ee.kristiina.marie.palu.personmanager.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ee.kristiina.marie.palu.personmanager.person.Person;


@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    // @Repository that extends the CrudRepository.--- (CRUD (Create, Read, Update, Delete))
    // The @Repository annotation marks this interface as a Spring Data repository.
}