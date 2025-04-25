package ee.kristiina.marie.palu.personmanager.controller;


import ee.kristiina.marie.palu.personmanager.person.Person;
import ee.kristiina.marie.palu.personmanager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
public class PersonController {

    // the @RestController annotation plays an important role in
    // handling HTTP requests and returning JSON responses.

    //The RestController allows the class to handle REST API requests
    // such as GET, POST, PUT, DELETE by automatically serializing responses to JSON.
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private JdbcTemplate jdbcTemplate;



    /**
     * @return people
     */
    @GetMapping
    public List<Person> getAllPeople() {
        return personRepository.findAll();
    }

    /**
     * @param id id
     * @return person by id
     */
    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable Integer id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Person not found"));
    }

    /**
     * @param person create
     * @return person
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }


    /**
     * @param id            update person
     * @param personDetails update
     * @return person
     */
    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable Integer id, @RequestBody Person personDetails) {
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Person not found"));
        person.setName(personDetails.getName());
        person.setEmail(personDetails.getEmail());
        person.setPhone(personDetails.getPhone());
        person.setGender(personDetails.getGender());
        person.setBirthDate(personDetails.getBirthDate());
        return personRepository.save(person);
    }


    /**
     * @param id delete person
     */
    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Integer id) {
        personRepository.deleteById(id);
    }
}
