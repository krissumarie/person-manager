package ee.kristiina.marie.palu.personmanager.controller;


import ee.kristiina.marie.palu.personmanager.person.Person;
import ee.kristiina.marie.palu.personmanager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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


    /**
     *
     * @return people
     */
    @GetMapping
    public List<Person> getAllPeople() {
        return personRepository.findAll();
    }

    /**
     *
     * @param id id
     * @return person by id
     */
    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable long id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Person not found"));
    }

    /**
     *
     * @param person create
     * @return person
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Person createPerson(@RequestBody Person person) {
        System.out.println(">>> Incoming person: " + person); // Debug print

        return personRepository.save(person);
    }

    /**
     *
     * @param id update person
     * @param personDetails update
     * @return person
     */
    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable long id, @RequestBody Person personDetails) {
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        person.setName(personDetails.getName());
        person.setBirthDate(personDetails.getBirthDate());
        person.setEmail(personDetails.getEmail());
        person.setGender(personDetails.getGender());
        person.setId(personDetails.getId());
        person.setPhone(personDetails.getPhone());
        return personRepository.save(person);
    }

    /**
     *
     * @param id delete person
     */
    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable long id) {
        personRepository.deleteById(id);
    }
}
