class GeneratePrefixAndMessage {
  execute(message) {
    const args = message.split(' ');

    if (args[0][0] === ';' && args[0][1]) {
      const prefix = 'invalid';
      const content = 'invalid';

      return { prefix, content };
    }

    const prefix = args[0];

    args.splice(0, 1);

    const content = args.join(' ');

    return { prefix, content };
  }
}

module.exports = GeneratePrefixAndMessage;
