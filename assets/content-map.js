const contentSections = [
  { id: 'home', title: '首页', tags: ['爱游戏', '热门推荐', '首页精选'], url: 'https://web-lovegames.com' },
  { id: 'games', title: '游戏库', tags: ['爱游戏', '新游', '分类浏览'], url: 'https://web-lovegames.com/games' },
  { id: 'news', title: '资讯', tags: ['爱游戏', '新闻', '更新日志'], url: 'https://web-lovegames.com/news' },
  { id: 'community', title: '社区', tags: ['爱游戏', '讨论', '攻略'], url: 'https://web-lovegames.com/community' },
  { id: 'support', title: '客服支持', tags: ['爱游戏', 'FAQ', '帮助中心'], url: 'https://web-lovegames.com/support' }
];

const keywordTags = [
  { keyword: '爱游戏', related: ['首页', '游戏库', '资讯', '社区', '支持'] },
  { keyword: '休闲', related: ['游戏库', '社区'] },
  { keyword: '动作', related: ['游戏库'] },
  { keyword: '更新', related: ['资讯', '支持'] }
];

function filterSectionsByTag(tag) {
  const results = [];
  for (let i = 0; i < contentSections.length; i++) {
    const section = contentSections[i];
    if (section.tags.includes(tag)) {
      results.push(section);
    }
  }
  return results;
}

function findRelatedKeywords(input) {
  const found = [];
  for (let i = 0; i < keywordTags.length; i++) {
    const entry = keywordTags[i];
    if (entry.keyword.includes(input)) {
      found.push(entry);
    }
  }
  return found;
}

function searchContent(query) {
  const matched = [];
  const lowerQuery = query.toLowerCase();
  for (let i = 0; i < contentSections.length; i++) {
    const section = contentSections[i];
    if (section.title.toLowerCase().includes(lowerQuery)) {
      matched.push({ section, matchType: 'title' });
      continue;
    }
    for (let j = 0; j < section.tags.length; j++) {
      if (section.tags[j].toLowerCase().includes(lowerQuery)) {
        matched.push({ section, matchType: 'tag' });
        break;
      }
    }
  }
  return matched;
}

function buildTagCloud() {
  const cloud = {};
  for (let i = 0; i < contentSections.length; i++) {
    const tags = contentSections[i].tags;
    for (let j = 0; j < tags.length; j++) {
      const tag = tags[j];
      if (cloud[tag]) {
        cloud[tag] += 1;
      } else {
        cloud[tag] = 1;
      }
    }
  }
  return cloud;
}

const tagCloud = buildTagCloud();

console.log('站点分区列表:', contentSections);
console.log('标签云:', tagCloud);
console.log('搜索 "爱游戏":', searchContent('爱游戏'));
console.log('按标签 "爱游戏" 过滤分区:', filterSectionsByTag('爱游戏'));
console.log('查找关键词 "爱游戏" 的相关条目:', findRelatedKeywords('爱游戏'));