import { Generator, command } from 'battlecry';

export default class SetupGenerator extends Generator {
  compatibility = '1.x';

  @command({ description: "Add a battlecry-setup.js file to your project's battlecry folder" })
  generate() {
    this.template('battlecry-setup.js').saveAs('battlecry/');
  }
}
