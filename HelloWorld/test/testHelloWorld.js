const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', (accounts) => {
  it('should return initial name as test', async () => {
    const HelloWorldInstance = await HelloWorld.deployed();
    const name = await HelloWorldInstance.getName.call();

    assert.equal(name, "test", "test wasn't name");
  });

  it('should set  name as emre ', async () => {
    const HelloWorldInstance = await HelloWorld.deployed();
    await HelloWorldInstance.setName("emre");
    const name = await HelloWorldInstance.getName.call();

    assert.equal(name, "emre", "emre wasn't name");
  });


 
});

