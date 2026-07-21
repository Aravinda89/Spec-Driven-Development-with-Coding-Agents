const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const changelogPath = path.resolve(__dirname, '..', 'CHANGELOG.md');

function getCommits() {
  const output = execSync('git log --date=short --pretty=format:"%ad %h %s" --reverse', { encoding: 'utf-8' });
  return output.trim().split(/\r?\n/).filter(Boolean);
}

function buildEntries(commits) {
  const grouped = {};
  for (const line of commits) {
    const [date, hash, ...messageParts] = line.split(' ');
    const message = messageParts.join(' ');
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(`- ${message} (${hash})`);
  }
  return grouped;
}

function formatChangelog(grouped) {
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  const lines = ['# Changelog', ''];
  dates.forEach(date => {
    lines.push(`## ${date}`);
    grouped[date].forEach(entry => lines.push(entry));
    lines.push('');
  });
  return lines.join('\n');
}

function main() {
  const commits = getCommits();
  const grouped = buildEntries(commits);
  const changelog = formatChangelog(grouped);
  fs.writeFileSync(changelogPath, changelog + '\n', 'utf-8');
  console.log(`Updated ${changelogPath}`);
}

main();
