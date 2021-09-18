const TestMethod = require('./testmethod1');

test('output should be hello world', ()=>{
    expect(TestMethod()).toBe("Hello World");
});