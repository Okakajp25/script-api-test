export function playerdeta(name) {
  class playerdeta {
    constructor(name, level, firstlogin, newlogin, newlogout) {
    this.name = "";
    this.level = 0;
    this.firstlogin = "";
    this.newlogin = "";
    this.newlogout = "";
    }
  }
  const dpname = name;
  const dplevel = 0;
  const dpfrirst = "5/9-05:08"
  const dpnewlogin = "12/18-19:28"
  const dpnewlogout = "12/18-19:30"

  const pd = new playerdeta();

  pd.name = dpname;
  pd.level = dplevel;
  pd.firstlogin = dpfrirst;
  pd.newlogin = dpnewlogin
  pd.newlogout = dpnewlogout

  console.info(pd)
}
