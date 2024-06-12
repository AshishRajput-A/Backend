class ApiResponce {
  constructor(statudcode, data, message = "Success") {
    this.statudcode = statudcode;
    this.data = data;
    this.message = message;
    this.success = statudcode < 400;
  }
}

export { ApiResponce };
