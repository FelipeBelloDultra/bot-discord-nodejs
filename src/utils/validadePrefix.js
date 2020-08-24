function validadePrefix(message) {
  const args = message.split(' ');

  const prefix = args[0];

  args.splice(0, 1);

  const content = args.join(' ');

  return { prefix, content };
}

module.exports = validadePrefix;
