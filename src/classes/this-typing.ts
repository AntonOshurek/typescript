class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  role: string[];
}

const userBuild = new UserBuilder().setName("user");
const adminBuilder = new AdminBuilder().setName("admin");

if (adminBuilder.isAdmin()) {
  console.log("admin");
}
