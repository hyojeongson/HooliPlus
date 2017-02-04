# 기여

## 일반 워크 플로

1. 포크 repo
1. 마스터로부터 feature 브렌치 이름양식을 정의합니다.
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...
1. feature branch에 커밋할 시 다음과 같은 접두사로 묶으십시오.
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...
1. 수정 또는 기능을 끝내면 rebase upstream으로 팀의 코드로 동기화 합니다. 제출 [풀 요청] []
   직접 마스터로. 변경 사항에 대한 설명을 포함하십시오.
1. 귀하의 요청을 다른 멤버가 검토 할 것입니다. 코드의 요점
   리뷰는 코드베이스를 깨끗하고 고품질로 유지하게 합니다.
   깨끗하게 코딩을 한다면 프로그래머로서 성장하는 데 도움이 됩니다~!
   당신이 이해할수 없는 변화를 요구한다면, 왜 그런지 물어보십시오. 소통하는건 아주 중요해요!
1. 코드 개정판에서 제기 된 문제를 해결하고 수정 사항을 단일 코드로 푸시하십시오.

1. 끌어 오기 요청이 검토되면 다른 팀원이 병합합니다. 자신의 커밋을 병합하지 마십시오!!!

## Detailed Workflow

### repo 포크

github의 인터페이스를 사용하여 repo를 분기 한 다음 해당 repo를 업스트림 원격으로 추가하십시오.

```
git remote add upstream https://github.com/svcoding/<NAME_OF_REPO>.git
```

마스터로부터 네임 스페이스로 된 지형 브랜치 잘라 내기

지사는 다음과 같은 명명 규칙을 따라야합니다.
  - 버그 / ...
  - feat / ...
  - 테스트/...
  - 의사 / ...
  - 리팩토링 ...

이 명령은 다음과 같이 도움이됩니다.

``bash

# 브렌치를 새로 만든후 사용하세요
git checkout -b`your-branch-name`
```

### feature 브랜치에 커밋을하십시오.

그렇게 각 커밋 앞에 접두사
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...

지사를 변경하고 커밋할시
이 브랜치와 관련된 변경 만하십시오. 
무관한 변경을하는 사람들이 있다면, 그들에게 새로운 브렌치를 만들어 변경하라고 하세요.

#### 메시지 전달 가이드 라인

- 커밋 메시지는 현재 시제로 작성되어야합니다. 예 : "지속적인 수정
  통합 스크립트 ". ("Fix continuous
  integration script")
- 커밋 메시지의 첫 번째 줄에는 변경 사항을 커밋합니다. 최대 약 70자를 목표로하십시오. 기억하십시오 : 요!약!.
  변경된 모든 것에 대한 자세한 설명은 아닙니다.
- 커밋에 대해 더 자세히 설명하고 싶다면 첫 번째 줄 밑에  빈 줄을 입력하고 커밋에 대한 자세한 설명을 입력하십시오.
  원하는대로 자세하게 여기에서 서술한 후에 살펴보고 첫 번째 줄을 짧게 유지하십시오.

### 업스트림 변경 사항을 브랜치에 재 적용

일단 변경이 끝나면, 다음 단계로 넘어갈 수 있습니다.
코드가 기본 저장소에 병합되었습니다. 1 단계는 rebase upstream입니다.
이 명령을 실행하여 마스터 브랜치를 자신의 브랜치로 바꾼다.
from your branch:

```bash
git pull --rebase upstream master
```

그러면 rebase 프로세스가 시작됩니다. rebase 하기전, 모든 변경 사항을 커밋해야합니다.
충돌이 없다면, 바로 성공할것입니다.
변경 사항을 업스트림의 코드로 
nice, clean, linear 커밋하세요.

충돌하는 변경 사항이있는 경우 git가 부분적으로 알려줄 것입니다.
리베이스 과정 중 충돌하는 경우 rebasing을 멈추게 할 것이다.
충돌한 부분을 동기화해야합니다. 이 작업은 병합 충돌을 해결하는 것과 같은 방법으로 수행합니다.
git가 양쪽 히스토리에서 변경된 모든 파일을 검사한 후
원하는 버전을 선택하십시오. 이 변경 사항은
당신의 풀 요청을 유지하고, 업스트림의 변화를 많이 가능한 한 많이 하세요.

`git add`를 사용하여 변경된 파일을 선택합니다 - 커밋은 하지 않습니다.
rebase.

특정 커밋에 대한 충돌을 수정 한 후에는 다음을 실행하십시오.

```bash
git rebase --continue
```

그러면 리베이스 프로세스가 계속됩니다. 일단 모든 충돌을 수정한 후
기존 테스트를 실행하여 코드에 에러가 생기지 않았는지 확인해야합니다.
그런 다음 새 테스트를 실행하십시오 (새로운 테스트가... 있죠??)
새 테스트 또한 통과하는지 확인하십시오.

리베이스후 에러가 생긴 경우 이를 수정 한 다음 위의 과정을 반복하십시오.
에러가 없고 모든 검사가 통과한 상태로 이곳에 도달할때까지 반복하세요.

### 당기기 요청

포크와 가지에서 업스트림 마스터에게 명확한 요청을합니다.
브랜치, 당신이 만든 변경 사항과이 추가되는 기능에 대해 자세히 설명합니다. 당신의 pull request가 명확할수록 더 빨리 
변경 사항이이 레포에 통합될것입니다.

적어도 한 명의 다른 사람은 변경 사항에 코드 검토하고 한 번만
그들은 변화를 업스트림으로 병합합니다. 또는,
변경 요청 사항이 있을 경우, 가지를 더 수정 한 다음이 
커밋하고 프로세스를 리베이스 이후부터 다시 수행하십시오.

일단 이 부분으로 돌아 오면 추가 검토를 요청하는 의견을 남기고
누군가가 코드를 다시 보게 될 것입니다. 
그리고 합병을 하거나 다시 변경 요청을 신청 할 것입니다,
변경을 요청한 경우 다시 반복하십시오.

공헌 해 주셔서 감사합니다!

### 지침

1. 현재 코드 표준 준수 :
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. 끌어 오기 요청을 제출하기 전에 [tests] []를 실행하십시오.
1. 시험은 매우 중요합니다. 끌어 오기 요청에 새로운 테스트가 포함 된 경우 테스트 제출
1. pull request는 단일 ([squashed] []) 커밋으로 구성됩니다.

## 점검표 :

이는 프로세스 구성을 돕기위한 것입니다.

- [] 기존 작업 영역에서 새 분기를 자르지 않고 마스터에서 작업 영역을 잘라 냈습니까?
- [] 지점에 대한 올바른 이름 지정 규칙을 따랐습니까?
- [] 내 가지가 하나의 주된 변화에 집중하고 있습니까?
 - [] 모든 변경 사항이 주되 변화와 직접적으로 관련이 있습니까?
- [] 모든 작업을 마친 후 업스트림 마스터 브랜치를 리베이스 했습니까?
  작업?
- [] 내가 변경 한 내용을 자세히 설명하는 명확한 요청 메시지를 작성 했습니까?
- [] 코드 검토를 받았습니까?
 - [] 해당 코드 검토에서 요청 된 변경 사항을 수행 했습니까?

이 가이드 라인을 모두 준수하고 잘 변경하면
변경 사항을 병합하는 데 아무런 문제가 없습니다.


<!-- Links -->
[style guide]: https://github.com/reactorcore/style-guide
[n-queens]: https://github.com/reactorcore/n-queens
[Underbar]: https://github.com/reactorcore/underbar
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[cons of merge]: https://f.cloud.github.com/assets/1577682/1458274/1391ac28-435e-11e3-88b6-69c85029c978.png
[Bookstrap]: https://github.com/reactorcore/bookstrap
[Taser]: https://github.com/reactorcore/bookstrap
[tools workflow diagram]: http://i.imgur.com/kzlrDj7.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
