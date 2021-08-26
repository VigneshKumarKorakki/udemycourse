import axios from "axios";
import Users from './Users'


// Once we mock the module we can provide a mockResolvedValue for .get that returns the data we want our test to assert against.
//  In effect, we are saying that we want axios.get('/users.json') to return a fake response.

jest.mock('axios');
// Option1
const mockedAxios = axios as jest.Mocked<typeof axios>;


test("Should fetch users", () => {
  const users = [{name: 'Bob'}]
  const resp = { data: users}
  // Option1
  // mockedAxios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  mockedAxios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users))

})