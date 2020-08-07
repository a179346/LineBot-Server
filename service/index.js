exports.handleCommand = async (command, event) => {
  switch (command) {
    default: await event.reply(command + '? Why should I do that for you ?');
  }
};