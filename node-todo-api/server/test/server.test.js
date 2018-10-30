const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', () => {
    it('should create a new todo',(done) => {
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err) {
                return done(err)
            }
      });
      Todo.find().then((todos) => {
          expect(todos.length).toBe(1)
          expect(todos[0].text).toBe(text)
          done();
      }).catch((e) => done(e));
      
      beforeEach((done) => {
        Todo.remove({}).then(() => done());
      });
    //   With this in place, our database is going to be empty before every request,
      });
});



        // this is going to be an asynchronous test. You have to specify done,
        // otherwise this test is not going to work as expected.