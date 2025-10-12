---
layout: base.njk
title: "Posts"
description: "Creative posts and stories"
---

{% if collections.posts %}

<ul class="post-list">
{% for post in collections.posts | reverse %}
  <li>
    {% if post.data.image %}
    <div style="width: 100%; height: 200px; background: url('{{ post.data.image }}') center/cover; border-radius: 8px; margin-bottom: 1rem;"></div>
    {% endif %}
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  </li>
{% endfor %}
</ul>
{% else %}
<div style="text-align: center; margin: 3rem 0;">
    <p>No posts yet.</p>
</div>
{% endif %}
