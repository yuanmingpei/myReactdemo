{
  class Hd {
    private name: string
    constructor(name: string) {
      this.name = name
    }
    public info(): void { }
  }
  class User extends Hd {
    constructor(name: string) {
      super(name)
    }

    public info(): void {

    }
  }
  new User('aa')
}