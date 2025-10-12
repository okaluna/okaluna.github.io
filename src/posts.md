---
layout: base.njk
title: "Blog Posts"
description: "All blog posts on Okaluna"
---

# Blog Posts

{% if collections.posts %}

<ul class="post-list">
{% for post in collections.posts | reverse %}
  <li>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <div class="post-meta">{{ post.data.date }}</div>
    <p>{{ post.data.description or "No description available." }}</p>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No blog posts yet. <a href="/admin/">Create your first post</a>!</p>
{% endif %}
