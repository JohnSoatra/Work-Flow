let files;
let folderLength;
let folderCounter;
let result;
let counter;

const hanldeDropOut = async (event) => {
  event.preventDefault();
  return new Promise((res, rej) => {
    const entries = [];
    const items = event.dataTransfer.items;
    for (let item of items) {
      entries.push(item.webkitGetAsEntry());
    }
    if (entries.length > 0) {
      files = [];
      folderCounter = 0;
      folderLength = entries.length;
      entryJob(entriesSorter(entries), res);
    } else {
      res([]);
    }
  });
}
const directoryJob = (entry, res) => {
  const reader = entry.createReader();
  reader.readEntries(entries => {
    folderLength = entries.length;
    folderCounter = 0;
    folderLength > 0 ? entryJob(entriesSorter(entries), res) : finishJob(res);
  });
}
const entryJob = (entries, res) => {
  for (let entry of entries) {
    if (entry.isFile) {
      files.push(entry);
      folderCounter ++;
      if (
        folderCounter === folderLength
      ) {
        finishJob(res);
      }
    } else {
      directoryJob(entry, res);
    }
  }
}
const finishJob = res => {
  result = [];
  counter = 0;
  if (files.length > 0) {
    listFile(files[0], res);
  }
  else {
    res([]);
  }
}

const listFile = (entry, res) => {
  entry.file(file => {
    result.push(new File([file.slice(0)], entry.fullPath, {
      type: file.type,
      lastModified: file.lastModified,
      endings: file.endings
    }));
    counter ++;
    if (counter < files.length) {
      listFile(files[counter], res);
    }
    else {
      res(result);
    }
  });
}
const entriesSorter = (entries) => {
  const files = [];
  const dirs = [];
  for (let entry of entries) {
    if (entry.isFile) {
      files.push(entry);
    }
    else {
      dirs.push(entry);
    }
  }
  return [...files, ...dirs];
}

export default hanldeDropOut;