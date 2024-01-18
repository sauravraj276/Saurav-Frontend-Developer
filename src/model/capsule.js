class Capsule {
    constructor(data) {
      this.capsuleSerial = data.capsule_serial;
      this.capsuleId = data.capsule_id;
      this.status = data.status;
      this.originalLaunch = data.original_launch;
      this.originalLaunchUnix = data.original_launch_unix;
      this.missions = data.missions;
      this.landings = data.landings;
      this.type = data.type;
      this.details = data.details;
      this.reuseCount = data.reuse_count;
    }
  }
  
  export default Capsule;