---
layout: base.njk
title: "OkaLuna"
description: "Creative outpost of small worlds and experiments"
---

<section class="hero" aria-labelledby="intro-heading">
  <div class="hero__bg" role="img" aria-hidden="true"></div>
  <div class="hero__veil" aria-hidden="true"></div>
  <div class="hero__content">
    <h2 id="intro-heading" class="visually-hidden">Creative Outpost</h2>
    <p>
      Somewhere beyond the quiet screen glow, a patchwork realm drifts in slow orbit – mist valleys,
      soft peaks and doorways of light. Lantern spores wander over forgotten paths while distant
      clockwork groves breathe in hush cycles. You pause at a ridge of pale stone: below, small camps
      of ideas flicker — sketches, loops, half‑built engines, music seeds. Their signals rise like
      fireflies threading a map. Step lightly. Look closely. The little worlds are waking.
      <span class="whisper">Scroll onward to enter the camps.</span>
    </p>
    <span class="visually-hidden">Background illustration: dreamy misty valley with soft glowing doorways and distant hills.</span>
  </div>
</section>

{% if collections.posts %}

<ul class="post-list">
{% for post in collections.posts | reverse %}
  <li>
    {% if post.data.image %}
      <div style="width:100%;height:200px;background:url('{{ post.data.image }}') center/cover;border-radius:8px;margin-bottom:1rem;"></div>
    {% endif %}
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  </li>
{% endfor %}
</ul>
{% else %}
<div style="text-align:center;margin:3rem 0;">
  <p>No posts yet.</p>
</div>
{% endif %}
